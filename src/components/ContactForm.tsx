import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="my-4">
        <label className="mb-2 block font-medium text-gray-200" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          className={`w-full rounded-md border border-gray-400 p-2 ${
            errors.name ? "border-red-500" : ""
          }`}
          type="text"
          name="name"
          id="name"
          placeholder="Name surname"
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
          placeholder="Your message"
          name="message"
          id="message"
          rows={4}
        />
        {errors.message && (
          <p className="text-xs italic text-red-500">Message is required</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="rounded-md bg-blue-400 py-2 px-4 font-medium text-white"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
