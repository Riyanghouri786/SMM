export default function About() {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-blue-600">
          About Us
        </h1>
        <p className="mb-6 text-center text-gray-500">
          Learn more about{" "}
          <strong className="text-blue-500">Riyan Ghouri</strong> and our
          commitment to excellence.
        </p>
        <div className="space-y-6">
          <p className="text-lg leading-8 text-gray-700">
            Welcome to <strong className="text-blue-600">Riyan Ghouri</strong>,
            your go-to platform for reliable and efficient services. We are
            dedicated to providing top-notch solutions tailored to meet your
            needs.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            Our team is passionate about delivering excellent customer
            experiences and maintaining the highest quality standards. Whether
            you’re looking for innovative ideas or reliable solutions, we’ve got
            you covered.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            Thank you for choosing{" "}
            <strong className="text-blue-600">Riyan Ghouri</strong>. We look
            forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}
