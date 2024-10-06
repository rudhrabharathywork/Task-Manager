import AppBg from "../assets/images/beamerxuserflow BG.png"


const Home = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${AppBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '91.5vh',
                width: '100%'
            }}>
            </div>

        </>
    )
}

export default Home;