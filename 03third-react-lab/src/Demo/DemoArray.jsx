function DemoArray1() { 
    const arr = ["BHAVIIK", "YASHLO", "JAL"];
    
    return(
        <>
            {
                arr.map((s, index) => (
                    <p key={index}>{s}</p>
                ))
            }
        </>
    );
}


function DemoArray2() { 
    const arr = ["BHAVIIK", "YASHLO", "JAL"];
    
    return(
        <>
            {arr.map((s, index) => (
                <div key={index}>
                    {s === "YASHLO" 
                        ? <h2>Special: {s}</h2>
                        : <p>Regular: {s}</p>
                    }
                </div>
            ))}
        </>
    );
}

function DemoArray() {
    return(
        <>
            <DemoArray1 />
            <DemoArray2 />
        </>
    );  
}
export default DemoArray;
