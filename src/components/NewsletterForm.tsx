type NewsletterFormProps = {
  placeholder: string;
  buttonLabel: string;
  helperText: string;
};

export function NewsletterForm({
  placeholder,
  buttonLabel,
  helperText
}: NewsletterFormProps) {
  return (
    <form className="max-w-[430px]">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="email"
          placeholder={placeholder}
          className="min-h-12 flex-1 rounded-xs border border-transparent bg-gray-300 px-4 text-field text-white placeholder:text-white/52 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="min-h-12 rounded-xs bg-coral px-6 text-button-2 text-gray-400"
        >
          {buttonLabel}
        </button>
      </div>
      <p className="mt-4 text-body-4-mobile text-white/88 md:text-body-5">{helperText}</p>
    </form>
  );
}
