
 interface version{
 version:string,
 release_date:string,
 bugs:string,
 feature:string,
 author:string,
 type:string
 }
 const software_UPDATES=[
 {
 version:'2.1',
 release_date:'2021',
 bugs:"crashing",
 feature:"karaoke mode",
 author:"spotify",
 type:"major"

 },
 {
 version:'3.1',
 release_date:'2022',
 bugs:"UPI bug",
 feature:"introducing to action calls",
 author:"truecaller",
 type:"major"

 },
 {
 version:'4.1',
 release_date:'2022',
 bugs:"video freeze",
 feature:"icons get new look",
 author:"netflix" ,
 type:"major" 
 },
 {
 version:'4.3',
 release_date:'2021',
 bugs:'voice call error',
 feature:"admin msg control",
 author:"whatsapp",
 type:"match enhancement"
 },
 {
 version:'4.5',
 release_date:'2022',
 bugs:'crashing',
 feature:"react over msg",
 author:"whatsapp",
 type:"match enhancement"
 },
 { version:'4.7',
 release_date:'2022',
 bugs:'crashing',
 feature:"more reaction over msg",
 author:"whatsapp",
 type:"match enhancement"
 }]
 console.table(software_UPDATES)

 function searchbyyear(year:any){
 var count_UPDATES=software_UPDATES.filter(n=>n.release_date.includes(year))
 console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
 console.log(count_UPDATES)
 }
 console.table(searchbyyear(2022))
 console.log('__________________________________________________________________________________________________________________________')
 console.log('***************************************************************************************************************************')
 console.log('__________________________________________________________________________________________________________________________')
 function searchbyauthor(name:any){
 var count_AUTHOR=software_UPDATES.filter(n=>n.author.includes(name))
 console.log(`"${name} is the one who launched ${count_AUTHOR.length} times software updates `)
 console.log(count_AUTHOR)
 }
 console.table(searchbyauthor('whatsapp'))
 console.log('__________________________________________________________________________________________________________________________')
 console.log("***********************************************************************************************************************")
 console.log('__________________________________________________________________________________________________________________________')

 function searchbyversion(version:any){
 var version_FORSOFTWARE=software_UPDATES.filter(n=>n.version.includes(version))
 console.log(`"the software which having ${version}version `)
 console.log(version_FORSOFTWARE)
 }
 console.table(searchbyversion(4.1))
 console.log('__________________________________________________________________________________________________________________________')
 console.log("*************************************************************************************************************************")
 console.log('__________________________________________________________________________________________________________________________')
 function searchbytype(type:any){
 var type_OFSOFTWARE=software_UPDATES.filter(n=>n.type.includes(type))
 console.log(`"the software which having ${type} type `)
 console.log(type_OFSOFTWARE)
 }
 console.log('__________________________________________________________________________________________________________________________')
 console.table(searchbytype('match enhancement'))
 console.log('__________________________________________________________________________________________________________________________')
 console.table(searchbytype('major'))
