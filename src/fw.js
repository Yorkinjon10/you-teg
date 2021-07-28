import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faBox } from  "@fortawesome/free-solid-svg-icons";
import { faLock } from  "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
library.add( faTimes, faCopy, faBox, faLock, faUsers, faSearch, faWindowRestore, faEllipsisV, faPaperclip, faSmile, faMicrophone );
export const Fa = {
    faTimes: <FontAwesomeIcon icon={faTimes} />,
    faCopy: <FontAwesomeIcon icon={faCopy} />,
    faBox: <FontAwesomeIcon icon={faBox} />,
    faLock: <FontAwesomeIcon icon={faLock} />,
    faUsers: <FontAwesomeIcon icon={faUsers} />,
    faSearch: <FontAwesomeIcon icon={faSearch} />,
    faWindowRestore: <FontAwesomeIcon icon={faWindowRestore} />,
    faEllipsisV: <FontAwesomeIcon icon={faEllipsisV} />,
    faPaperclip: <FontAwesomeIcon icon={faPaperclip} />,
    faSmile: <FontAwesomeIcon icon={faSmile} />,
    faMicrophone: <FontAwesomeIcon icon={faMicrophone} />
}