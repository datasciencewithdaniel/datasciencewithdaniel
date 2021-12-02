const Contact = () => {
    return (<>
        <div className="pt-3">
            <form className="w-full justify-items-center mx-auto mt-10 max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                        <p className="text-red-500 text-xs italic">* Required</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        <p className="text-red-500 text-xs italic">* Required</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">
                            Discord Username
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 shadow-lg text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        <p className="text-gray-400 text-xs italic">if applicable</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full shadow-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="flex md:w-1/3">
                        <button className="blueBackLight blueTextDark focus:shadow-outline focus:outline-none shadow-lg font-bold py-2 px-4 rounded font-mono transition duration-500 ease-in-out hover:border-blue-200 hover:bg-blue-300 " type="button">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}

export default Contact;
// https://www.pluralsight.com/guides/how-to-use-multiline-text-area-in-reactjs
