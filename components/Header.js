import Image from 'next/image'
function Header() {
  return (
    <header>
        <h1 className="text-2xl text-red-500"> Header</h1> 
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWzcb6_h2SkjcHCv5c_1pyC7auAIbUqdeW4znR6iAq2gq8sEYbeEEajkf0P3r5NYi2LA&usqp=CAU" alt='' width={200} height={100}/>
    </header>
  )
}

export default Header