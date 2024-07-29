import React from 'react'

const Feedback = () => {
  return (
    <div id="feedback" className='pt-5 pb-5 bg-primary'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 intro-text text-white'>
                <h1>Feedback</h1>
            </div>
        </div>
        <form action='' method='POST' className='row justify-content-center'>
            <div className='col-lg-8'>
                <div className='row g-3'>
                    <div className='form-group col-md-6'>
                        <input type='text' name='name' className='form-control' placeholder='Full name' required />
                    </div>
                    <div className="form-group col-md-6">
                        <input type='email' name='email' className='form-control' placeholder='Email Address' required/>
                    </div>
                    <div className='form-group col-md-12'>
                        <textarea name='message' id='' required cols="30" rows="4" className='form-control'
                           placeholder='Enter your feedback here'></textarea>
                    </div>
                    <div className='form-group text-center col-md-12'>
                        <button type='submit' className='container-btn-brand'>Send Message</button>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback
