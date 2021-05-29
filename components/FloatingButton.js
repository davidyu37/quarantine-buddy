export default function FloatingButton(props) {

    return (
        <div style={{position: 'absolute', bottom: '20px'}} className="w-full flex items-center justify-center">
            <button style={{width: '90%'}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{props.text}</button>
        </div>
        
    )

}