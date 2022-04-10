import React, {useState} from 'react'
import data from './data'

const Home = () => {
    const [noOfElement, setNoOfElement] = useState(4);
    const slice = data.cardData.slice(0, noOfElement)
    const loadMore = ()=>{
        setNoOfElement(noOfElement + noOfElement)
    }
  return (
    <section className='py-4 container' >
        <div className='row justify-content-center'>
            {slice.map((item, index)=>{
                return(
                    <div key={index} className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={item.image} className='card-img-top ' alt='haahgaga'/>
                        <div className='card-body'>
                            <h1 className='card-title'>{item.title}</h1>
                            <p className='card-text'>{item.desc}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        <button onClick={()=> loadMore()} className='btn btn-dark d-block  w-100'>
            Load More
        </button>
    </section>
  )
}

export default Home