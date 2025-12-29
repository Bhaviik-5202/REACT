function DemoMap() {
    const handleClick = ( ()=> {
        alert("Button Clicked.....");
    });

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <h1>Hello</h1>
        </>
    );
} 

export default DemoMap;