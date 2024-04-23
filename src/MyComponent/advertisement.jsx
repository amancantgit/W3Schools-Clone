const imgUrl = [
                "https://source.unsplash.com/500x400/?cryptocurrency",
                "https://source.unsplash.com/500x400/?ethereum",
                "https://source.unsplash.com/500x400/?github", 
                "https://source.unsplash.com/500x400/?smart-contracts",
                "https://source.unsplash.com/500x400/?ico",
                "https://source.unsplash.com/500x400/?defi",
                "https://source.unsplash.com/500x400/?web3",
                "https://source.unsplash.com/500x400/?dapp",
                "https://source.unsplash.com/500x400/?linkedin",
                "https://source.unsplash.com/500x400/?coding", 
                "https://source.unsplash.com/500x400/?hacking",
              ];


const Advertisement = ({ darkMode }) => {
  return (
    <>
    <aside style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
    {/* <aside > */}
      
      <p>ADVERTISEMENT</p>
       {imgUrl.map((url, index) => ( 
        <img key={index} src={url} alt=""/>
        ))}
    </aside>
    </>
  )
}

export default Advertisement;