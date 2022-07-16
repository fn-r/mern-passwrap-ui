import bannerImg from '../../img/office.png'

const Banner = () => {
    return (
        <section className="py-8">
            <div className="container px-4 mx-auto">
                <div className="p-8 bg-indigo-500 dark:bg-gray-800 rounded overflow-hidden">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                            <h3 className="mb-2 text-4xl font-medium text-red-300">
                                <span className="text-white">Welcome to </span>
                                <span>Your Vault!</span>
                            </h3>
                            <p className="mb-4 max-w-sm text-sm text-blue-100">Your vault is a safe place to
                                securely store your passwords and notes. No matter where you are, your
                                vault keeps everything in sync to stay organized and save time.</p>
                        </div>
                        <div className="relative w-full md:w-1/2 px-4 hidden md:block">
                            <img className="md:absolute top-0 right-0 md:-mt-12 h-72 object-cover"
                                src={bannerImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner