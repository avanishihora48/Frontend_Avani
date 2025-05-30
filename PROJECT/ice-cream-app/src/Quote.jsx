import 'react'
import person from './assets/images/person-img.png'
import quote from './assets/images/quote-img.png'
import dots from './assets/images/dots.png'
export default function Quote() {
  return (
    <>
      <img
        src={person}
        style={{
          borderRadius: '43px',
          marginLeft: '580px',
          marginTop: '200px',
        }}
      />
      <div className="relative">
        <img
          src={quote}
          style={{
            marginLeft: '200px',
            marginTop: '50px',
          }}
        />
        <p className="absolute -top-0.5 mt-4 mx-56 underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse
          velit optio quae aperiam. Debitis libero quos, alias similique
          repellendus iure perferendis assumenda dolore, amet repellat
          voluptatum nemo voluptas officia.
        </p>
        <img
          src={dots}
          style={{
            marginLeft: '600px',
            marginTop: '50px',
          }}
        />
        <p className="text-xl mt-6 font-bold" style={{ marginLeft: '550px' }}>
          Emily, Los Angeles
        </p>
      </div>
    </>
  )
}
