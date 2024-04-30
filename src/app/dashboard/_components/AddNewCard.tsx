import { addBoard } from "./actions";

const AddNewCard = () => {
    return (
        <form>
            <input id="title" name="title" type="text" placeholder="Title" />
            <input id="board_img" name='board_img' type="text" placeholder="Image" />
            <button formAction={addBoard}>Add</button>
        </form>
    );
}

export default AddNewCard;