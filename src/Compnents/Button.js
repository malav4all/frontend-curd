export const Button=(props)=>{
return (<>
<button className={props.class} type={props.type} value={props.val} style={props.style} onClick={props.onClick}> {props.innertext}</button>

</>)
}