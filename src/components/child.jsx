

const Child = ({msg, data}) => {
    console.log(msg, "props", data)
    return(
        <>
        Hello i am child {msg}--{data}
        </>
    )
}

export default Child;