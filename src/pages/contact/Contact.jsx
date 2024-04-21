import React from 'react'
import Header from '../../components/header/Header'
import ContactHead from './componentsContact/banner/ContactHead'
import SendMessage from '../../components/sendMessage/SendMessage'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <>
       <Header/>
       <ContactHead/>
       {/* <SendMessage/> */}
       <div className='content-contact-aboutme'>
            <h1>Introduce yourself</h1>
       </div>
       <Footer/>
    </>
  )
}
