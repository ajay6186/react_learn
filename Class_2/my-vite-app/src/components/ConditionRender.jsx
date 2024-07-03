const ConditionalRender = ({isLoggedIn, username}) => {
    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome, {username}</h1>
                ) : (
                <h1>Please Login to continue</h1>
                )}
        </div>
    );
};

export default ConditionalRender