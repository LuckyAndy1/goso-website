import { useState } from 'react';

type SubmitState = 'idle' | 'submitted';

type ContactCopy = {
  inquiryTypes: readonly string[];
  successMessage: string;
  privacyLabel: string;
  fields: {
    company: string;
    name: string;
    phone: string;
    email: string;
    inquiryType: string;
    inquiryTypePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
  };
};

type Props = {
  contact: ContactCopy;
};

export default function ContactForm({ contact }: Props) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.info('contact form submitted', data);
    setSubmitState('submitted');
    form.reset();
  };

  return (
    <form className="space-y-6" name="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={contact.fields.company} name="company" required />
        <Field label={contact.fields.name} name="name" required />
        <Field label={contact.fields.phone} name="phone" type="tel" required />
        <Field label={contact.fields.email} name="email" type="email" required />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">{contact.fields.inquiryType}</span>
        <select
          name="inquiryType"
          required
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f4a3c] focus:ring-2 focus:ring-[#0f4a3c]/15"
        >
          <option value="">{contact.fields.inquiryTypePlaceholder}</option>
          {contact.inquiryTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">{contact.fields.message}</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={contact.fields.messagePlaceholder}
          className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f4a3c] focus:ring-2 focus:ring-[#0f4a3c]/15"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0f4a3c] focus:ring-[#0f4a3c]"
        />
        <span>{contact.privacyLabel}</span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-[#123c4a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f4a3c] md:w-auto"
      >
        {contact.fields.submit}
      </button>

      {submitState === 'submitted' && (
        <p className="rounded-md bg-[#eef5f1] px-4 py-3 text-sm font-medium text-[#0f4a3c]">
          {contact.successMessage}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f4a3c] focus:ring-2 focus:ring-[#0f4a3c]/15"
      />
    </label>
  );
}
