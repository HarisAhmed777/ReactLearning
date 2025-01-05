export const HOCComp = (Component)=>{
    return(props)=>{
        const handleclick = ()=>{
            console.log("Clicked",props.amount," ",props.users);
        }
        return(
            <>
            <div onClick={handleclick}>
                <Component {...props} />
            </div>
            </>
        )
    }
}