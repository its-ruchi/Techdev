import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='ABC' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="emal" required placeholder='ABC@gmail.com' />
                </div>
            
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='tell us your inquiry' />
                </div>
                <button type='submit'>SEND</button>
            </form>
        </main>
    </div>
  )
}

export default Contact