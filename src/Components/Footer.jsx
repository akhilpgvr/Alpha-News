const Footer = () => {
  return (
    <div className='bg-gray-100 py-10 px-5 md:px-20'>

      <div className='flex flex-col md:flex-row justify-between items-start gap-10'>

      <hr className='border-gray-400 my-8' />
        {/* Left Section */}
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-bold mb-4 text-black'>About Us</h2>
          <p className='text-black leading-6'>
            Experience seamless healthcare with our AI-powered doctor booking app—predict consultation times, minimize waiting, and get personalized care at your fingertips.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className='text-2xl font-bold mb-4 text-black'>Get in Touch</h2>
          <ul className='text-black space-y-2'>
            <li>📞 +9072350954</li>
            <li>📧 errorsmillion@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className='border-gray-400 my-8' />

      {/* Bottom Section */}
      <p className='text-center text-black text-sm'>
        &copy; 2025 Million Errors - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer;
