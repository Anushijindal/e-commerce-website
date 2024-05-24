import React from 'react'

const AddressDetails = ({addressData}) => {
  console.log(addressData);
  return (
    <div>
        <div className="space-y-2">
            <p className="font-semibold text-lg">{addressData?.firstName} {addressData?.lastName}</p>
            <p>{addressData?.street}{","} {addressData?.city}{","} {addressData?.state}{","} {addressData?.zipCode}</p>
            <div className='flex space-x-1'>
                <p className='font-semibold'>Phone Number:</p>
                <p>{addressData?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressDetails;