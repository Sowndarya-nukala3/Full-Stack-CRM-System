// Fields reflect the DTOs in the supplied Spring Boot archive.
export const modules={
 customers:['Customers','firstname lastname zipCode city','id','ced','firstname lastname zipCode city pesel',1],
 employees:['Employees','id firstName lastName role email salary departmentName','id','d','',1],
 suppliers:['Suppliers','supplierId supplierName typeOfTransport activityStatus','supplierId','ced','supplierName modeOfTransportCode activityStatus',1],
 products:['Products','id name productType sellingPrice purchasePrice taxRate','id','ced','name productType sellingPrice purchasePrice taxRate unitsOfMeasure',1],
 purchases:['Purchases','id customerId customerFirstName customerLastName purchaseDate invoiceId','id','cd','customer receiptExist invoiceExist invoice purchaseDate'],
 invoices:['Invoices','id invoiceDate customerId customerFirstName netWorth grossValue taxRate currency','id','ced','invoiceDate customer netWorth grossValue taxRate currency'],
 departments:['Departments','departmentId departmentName city managerFirstName managerLastName','departmentId','cd','departmentName city managers',1],
 absenteeisms:['Attendance','employeeId firstName lastName departmentName absenteeismName dateFrom dateTo','id','cd','employee reasonOfAbsenteeismCode dateFrom dateTo',1],
 posts:['Employee forum','postId title authorFirstName authorLastName createdAt content','postId','ced','title content'],
 'product-units':['Product units','id productId productName unitOfMeasure alternativeUnitOfMeasure conversionFactor','id','',''],
 'purchases-positions':['Purchase items','id amount productId productName purchaseId customerId sellingPrice purchaseDate','id','','']
};
export const words=s=>s.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/^./,x=>x.toUpperCase());
export const seed={customers:[{id:1,firstname:'Ava',lastname:'Murphy',city:'Dublin',zipCode:'D02'},{id:2,firstname:'Noah',lastname:'Kelly',city:'Cork',zipCode:'T12'}],employees:[{id:1,firstName:'Alex',lastName:'Ryan',role:'MANAGER',email:'alex@example.test',departmentName:'Sales'}],suppliers:[{supplierId:1,supplierName:'Northstar Supplies',typeOfTransport:'Road',activityStatus:'Active'}],products:[{id:1,name:'Office chair',productType:'Furniture',sellingPrice:125,purchasePrice:80,taxRate:23},{id:2,name:'Desk lamp',productType:'Lighting',sellingPrice:45,purchasePrice:25,taxRate:23}],invoices:[{id:1,customerId:1,grossValue:153.75,currency:'EUR',invoiceDate:'2026-11-01'}],purchases:[{id:1,customerId:1,customerFirstName:'Ava',purchaseDate:'2026-11-01'}],departments:[{departmentId:1,departmentName:'Sales',city:'Dublin'}],posts:[{postId:1,title:'Welcome to the workspace',content:'Share team updates here.',authorFirstName:'Alex',comments:[]}]};
