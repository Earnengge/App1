// import { useSocialSignup } from "../../hooks/useSocialSignup";
import { useAuthContext } from "../../context/authContext";


const TaskPage = () => {

    // const twitter = useSocialSignup(twitterProvider);
    const { user } = useAuthContext();

    return (
        <div style={{ marginBlock: '4rem' }}>
            {
                user ?
                    <div style={{ marginInline: '5rem' }}>
                        <h3>How to participate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellat quasi alias molestias, voluptatum aliquid porro tempore quae vel sit nobis culpa cum neque eum esse et laboriosam possimus? Ad.</p>

                        <div>
                            <p>1. Follow <a href="">Earnengage on twitter</a></p>
                        </div>
                    </div>
                    :
                    <div>Page only for authenticated users</div>
            }
        </div>
    )
}

export default TaskPage