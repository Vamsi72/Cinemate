import {Link} from 'react-router-dom';


export const Footer = () => {
  return (
    <footer>
      

<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Cinemate <sup>vk</sup></Link> . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/Vamsi72" target='_blank' rel="noreferrer" className="hover:underline me-4 md:me-6">GitHub</a>
        </li>
        <li>
            <a href="https://www.instagram.com/vamsi_x71/profilecard/?igsh=c3oyZ3NrZ2w5ODU3" target='_blank' rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
            <a href="mailto:vamsikrishna4575@gmail.com" className="hover:underline">Contact us</a>
        </li>
    </ul>
    </div>
</footer>

    </footer>
  )
}
