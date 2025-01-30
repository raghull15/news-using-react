import Counter from '../counter/counter';
import FetchApi from '../pages/FetchApi';
import SearchUser from '../pages/SearchUser';
function Home(){
    return(
        <div>
            <h1>welcome to jana nayagam</h1>
            <h2>This is the process of increment ,reset and decrement</h2>
            <FetchApi/>
            <Counter/>
            <SearchUser/>
        </div>
    );
}
export default Home;