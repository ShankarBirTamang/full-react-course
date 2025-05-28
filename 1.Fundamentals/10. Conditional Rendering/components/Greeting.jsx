const Greeting = ({timeOfDay}) =>{
    return (
        <>
        { timeOfDay === 'morning'? <div>Good morning! </div>: 
            timeOfDay === 'afternoon'? <div>Good afternoon!</div> :
            <div>Good evening! </div>
        }
        </>
    )
}

export default Greeting;