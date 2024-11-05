import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { Button } from "./ui/button";

interface Props {
  setSuccess: (value: string) => void;
  setError: (value: string) => void;
}

const ContactForm = ({ setSuccess, setError }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const captchaRef = useRef<any>(null);
  const { t } = useTranslation("contact");

  const submit = (data: any) => {
    if (!captchaRef?.current?.getValue()) {
      setError("Please verify that you are not a robot");
      return;
    }


    console.log(captchaRef.current.getValue())
    setSuccess(t("success"));
    captchaRef.current.reset()
    reset()
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="my-4">
        <label className="mb-2 block font-medium text-gray-200" htmlFor="name">
          {t("name_title")}
        </label>
        <input
          {...register("name", { required: true })}
          className={`w-full rounded-md border border-gray-400 p-2 ${
            errors.name ? "border-red-500" : ""
          }`}
          type="text"
          name="name"
          id="name"
          placeholder={`${t("name")} ${t("surname")}`}
        />
        {errors.name && (
          <p className="text-xs italic text-red-500">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-200" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          className={`w-full rounded-md border border-gray-400 p-2 ${
            errors.email ? "border-red-500" : ""
          }`}
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
        />
        {errors.email && (
          <p className="text-xs italic text-red-500">Email is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block font-medium text-gray-200"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          {...register("message", { required: true })}
          className={`w-full rounded-md border border-gray-400 p-2 ${
            errors.message ? "border-red-500" : ""
          }`}
          placeholder={`${t("your_message")}`}
          name="message"
          id="message"
          rows={4}
        />
        {errors.message && (
          <p className="text-xs italic text-red-500">Message is required</p>
        )}
        <ReCAPTCHA
          sitekey="6LerUwwkAAAAAJl2VKdtACXk0CwitaIFdEXlebHT"
          ref={captchaRef}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" size={"lg"} className="text-md">
          {t("send")}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
