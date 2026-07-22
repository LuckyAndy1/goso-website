import * as Dialog from '@radix-ui/react-dialog';
import Icon from 'astro-iconset/react';
import type { Locale } from '../../i18n';
import { localizePath } from '../../i18n';

type Company = {
  shortName: string;
};

type NavigationItem = {
  name: string;
  href: string;
};

type CommonCopy = {
  contactUs: string;
  openMenu: string;
  closeMenu: string;
  mobileMenuTitle: string;
  mobileMenuDescription: string;
  languageLabel: string;
};

type LanguageLink = {
  label: string;
  href: string;
  current: boolean;
};

type Props = {
  company: Company;
  navigation: readonly NavigationItem[];
  common: CommonCopy;
  locale: Locale;
  languageLinks: readonly LanguageLink[];
};

export default function MobileMenu({ company, navigation, common, locale, languageLinks }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="rounded-md p-2 text-slate-700 transition-colors hover:bg-stone-100 lg:hidden"
          aria-label={common.openMenu}
        >
          <Icon name="lucide:menu" className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden" />
        <Dialog.Content className="fixed inset-x-0 top-0 z-50 max-h-[88vh] overflow-y-auto border-b border-slate-200 bg-white shadow-xl lg:hidden">
          <Dialog.Title className="sr-only">{common.mobileMenuTitle}</Dialog.Title>
          <Dialog.Description className="sr-only">{common.mobileMenuDescription}</Dialog.Description>
          <div className="px-4 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-950">{company.shortName}</span>
              <Dialog.Close asChild>
                <button className="rounded-md p-2 text-slate-700 hover:bg-stone-100" aria-label={common.closeMenu}>
                  <Icon name="lucide:x" className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>
            <div className="mb-4 flex items-center rounded-md border border-slate-200 p-1" aria-label={common.languageLabel}>
              {languageLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className={`flex-1 rounded px-3 py-2 text-center text-sm font-semibold transition-colors ${
                    link.current ? 'bg-[#eef5f1] text-[#0f4a3c]' : 'text-slate-600 hover:bg-stone-100 hover:text-[#0f4a3c]'
                  }`}
                  aria-current={link.current ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Dialog.Close asChild key={item.href}>
                  <a
                    href={localizePath(item.href, locale)}
                    className="rounded-md px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-[#eef5f1] hover:text-[#0f4a3c]"
                  >
                    {item.name}
                  </a>
                </Dialog.Close>
              ))}
            </div>
            <Dialog.Close asChild>
              <a
                href={localizePath('/contact', locale)}
                className="mt-4 flex items-center justify-center rounded-md bg-[#123c4a] px-5 py-3 text-sm font-semibold text-white"
              >
                {common.contactUs}
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
