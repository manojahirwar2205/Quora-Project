import { useParams } from "react-router-dom";
import {details} from  '../pages/Details';
import "../pagescss/Sidebardetail.css";
import SidebarOption from '../component/SidebarOption';
const SideBarDetail = () =>{
    let {names} =useParams();
    // console.log(names);
    let value = details.find((value) => value.name === names)
    console.log(value);
    // console.log(name)
    return(
  <div className="SidebarInfo">
    <div className="sidebarinfo">
   <div className="xitem1">
    <SidebarOption/>
   </div>
   <div className="xitem2">
    <div className="xitems">
        <div className="xitems1">
        <img src={value.image}></img>
        </div>
        <div className="xitems2">
           <div> 
            <h4>{value.name}</h4>
            </div>
            <div>
                <button><i class="fa-solid fa-notes-medical"></i>Follow 124.8M</button>
            </div>
        </div>
    </div>
   </div>
   <div className="xitem3"></div>
    </div>

  </div>
    )
}

export default SideBarDetail;