import Forms from "../../../components/Forms/Forms";

export default function CreateUser(){
    return(
        <div className="parent">
            <Forms button="Create"
             buttonstyle={true} 
             navigate={"../Users"}
               endpoint={'user/create'} 
               />
        </div>
    );
}