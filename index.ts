import {usersArray, IusersArray} from "./users";
import {usersInfoArray, IusersInfoArray} from "./userinfo";

interface IUsersPositions {
   name: string;
   position: string;
   age: number | null;
   gender: "man" | "woman";
}


function  getUsersJobPositions(usersArray: IusersArray[]): IUsersPositions[]  {
   return usersArray.map((user) => {
      let userInfo = usersInfoArray.find(userInfo => userInfo.userid == user.userid);

      return {
         name: user.name,
         position: userInfo ? userInfo.organization.position : "N/A",
         age: userInfo ? userInfo.age : null,
         gender: user.gender
      }
   });
};

const usersPositions = getUsersJobPositions(usersArray); 
console.log('userPositions', usersPositions);