import React,{useState} from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const DeliveredItems = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.orderItems);
  console.log(data);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  // const formattedDate = data.createdAt.toLocaleDateString(undefined, options);
  // const [orderStatus,setOrderStatus]=useState("")
  // setOrderStatus(data.OrderStatus);
  const status=data?.OrderStatus;
  const orderId=data?._id;
  console.log(data?.OrderStatus,status,orderId);

  return (
    // <div
    //   onClick={() => navigate(`/account/myOrders/${5}`)}
    //   className="flex border-2 shadow-md justify-between py-2 px-3 rounded-md m-4 hover:shadow-2xl"
    // >
    // {
    //   data?.orderItems?.map((item)=>(
    //     <div className="flex flex-col">
    //     <div className="flex flex-row">
    //     <div className="w-[7rem] h-[7rem] p-3">
    //       <img
    //         className="w-full h-full object-cover object-top"
    //         src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/m/e/e/s-kurta-rahul-look-original-imaga2g6qmhbywdf-bb.jpeg?q=70"
    //         alt=""
    //       />
    //     </div>
    //     <div className="py-2 font-semibold">
    //       <p>Men Solid Pure Cotton Straight Kurta</p>
    //       <div className="flex space-x-1 opacity-50 text-sm">
    //         <p>Size:</p>
    //         <p>M</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="py-2 font-semibold">
    //     <p>Rs 499</p>
    //   </div>
    //   <div className="py-2 pr-5">
    //     <p className="font-semibold">
    //       <span className="text-green-700 ">
    //         <AdjustIcon sx={{ width: "15px", height: "15px" }} />
    //       </span>{" "}
    //       Expected Delivery on 10 April 2024
    //     </p>
    //     <p className="text-sm font-semibold opacity-55">
    //       Your item has successfully delivered
    //     </p>
    //   </div></div>
    //   ))
    // }

    // </div>
    <div  className="border-2 p-4 m-4 border-grey-600 shadow-lg rounded-lg">
    {/* <p>Ordered On: {formattedDate}</p> */}
      {data.orderItems.map((item) => (
        <div onClick={() => navigate(`/account/myOrders/${orderId}`)} className="border-2 border-grey-600 shadow-lg m-4 rounded-lg">
          <div className="flex flex-row justify-between p-2">
            <div className="w-[7rem] h-[7rem] p-3">
              <img
                className="w-full h-full object-cover object-top"
                src={`${item?.product[0]?.imgURL}`}
                alt=""
              />
            </div>
            <div className="py-2 font-semibold">
              <p>{item.product[0].title}</p>
              <div className="flex space-x-1 opacity-50 text-sm">
                <p>Size:</p>
                <p>{item?.size}</p>
              </div>
              <div className="py-2 font-semibold">
                <p>Rs. {item?.discountedPrice}</p>
              </div>
            </div>
            <div className="py-2 pr-5">
              <p className="font-semibold">
                <span className="text-green-700 ">
                  <AdjustIcon sx={{ width: "15px", height: "15px" }} />
                </span>{" "}
                {status}
              </p>
              <p className="text-sm font-semibold opacity-55">
                Your item has successfully {`${status.toLowerCase()}`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveredItems;
