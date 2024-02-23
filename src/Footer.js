import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}. AbreakerSoft Inc.</p>
    </footer>
  )
}

export default Footer