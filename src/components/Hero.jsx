import React from 'react';
import mac from '../assets/mac-icon.png';
import windows from '../assets/windows-icon.png';
import homeBackground from '../assets/home-background.png';
// import homeDisplayFunctions from '../assets/home-display-functions.png'
import homeDisplayHome from '../assets/home-display-home.png';
// import homeDisplayLogs from '../assets/home-display-logs.png'
import homeDisplayRegister from '../assets/home-display-register.png';

const Hero = () =>  {
    return (
        <div id="Hero" className="hero min-h-screen pt-16 bg-base-100 relative z-0">
            <div className="hero-content flex-col lg:flex-row justify-start w-full">
                <div className="flex flex-col w-1/2">
                    <h3 className="text-base-300 text-4xl font-nunito font-extrabold mx-4 mb-1">Go Serverless with Confidence.</h3>
                    <h3 className="text-base-300 text-xl font-bold mx-4">Monitor and Visualize Your AWS Lambda functions with Ease.</h3>    
                    <div className="flex justify-start items-center m-4">
                        <a href="http://nimbusapp-env.eba-jwatv44i.us-east-1.elasticbeanstalk.com/" target="_blank" rel="noreferrer"><button className="btn btn-secondary w-36 shadow-md mr-2 flex justify-center items-center opacity-75" >Launch App</button></a>
                        <a href="https://nimbus-app.s3.us-east-1.amazonaws.com/nimbus-darwin-arm64-1.0.0.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQAZ7KLVD3B466D45%2F20230215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230215T232547Z&X-Amz-Expires=6048000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDvPetrxgtHdkyn3XoPdda8fhzwkAgJDp9VgQJYM1tpbQIhAIsZYJS6tbJtump1muwrfKnb3CqYvDbopMKHZoqgJdXuKocDCDkQABoMMDAxNzQzNDEyNTUxIgxnqJ967xoR%2FGkD46cq5AIS1jNFpWC7U1WQv8INblFaUT2hBK8tTdDC%2BQoLfvNP9HuNOGyv2sepSO0lD7JrxKzU3o28Xc4edrnyIuLR6ZUKWwEn44FzDdsjfSd2IOBbGar4vCfLW0z3BCNtP1Zd%2BYs8UdNEpj6Y1g%2FVGdwQoZ%2FSmjnZUUaNi8WF6dCrBGUffirvh3LWDodok8PQpKp4N2JPtctZgwhom%2BIhvZG7I6LZ9G8hyKwgsRaA3MV3nSHBTYv80ti8g0ysV7StdyziihgUUAZJcg%2FUGi2DakL1r%2FV0SQbuWJBGhhykxwE9fiq2wEnlY%2FgtZiR4ziY0qHxAjJkmJWwMlxQ0QZi1aQOb%2B05Sxin2qOJ118mO5xIwMu5k68noEhDlOjCTw10EpK2pOOH1V11lbd69pKjAivEjkj8wcv02LvQNR77UQnD4JYYawImEYOabZLEKQG2tjFs4sW14%2FarHfS3zruSzdMHaIvNBg%2FesrjDDwbWfBjqzAsG%2F8%2Bn9s8HsQURObyWOLHmIlV1jqH9z1n8LtTJ%2ByOy8lQ1IhfVvbuqDlp9DVbHrxGjP8biCYKaUEa0kXW2PhIUAAUvFpLjxS0Tk1wUJxGeCM%2BnTdaUMA091DOZI4Pr%2F0W5eGzfur31AoZ7qf4rtoXJ%2Bjqavm4zdAh0uAzLC2Vx2KLFD4eULDdPwLEIXpX0C2ZvTNBkraVe6kbdx96Gz0SoNIPD8eG%2FI6GWLu96j74A%2BKhWD62jHdRqnk9%2FzgyUNUrfnvmTY4Unckh20Btq5f0l0PJKShwZGQ5vYWrC4mWPsHCvrcNGO4BZe0%2FykPSQIkMzphdzzsL5DNtS76cbD5gvKHY3xhCHgm4SxZs9CfqTtULLTe2MVwJq0hVVajfy%2BR9QwTzKl76yaIDqLupQDBzBz158%3D&X-Amz-Signature=e3ee9aa0f7f2eac85cf8d95263266ffb084433e4a9be4cd62b9e0cee30fd5dc6"
                        target="_blank" 
                        rel="noreferrer"
                        ><button className="btn btn-secondary w-36 shadow-md ml-2 flex justify-center items-center opacity-75" >Download<img src={mac} alt="Mac Download" className="w-6 mb-1.5"/></button></a>
                    </div>
                </div>
                {/* Replace svg with whatever image we want here */}
                {/* <img src={Login} alt="login" className="rounded-xl w-3/5"/> */}
                <div className="w-1/2 relative">
                    <div className="absolute rounded-xl shadow-xl bg-secondary flex justify-center items-center w-4/6 p-3 -top-48">
                        <img className="aspect-auto rounded-xl shadow-xl" alt="home page demo display on home tab" src={homeDisplayHome}/>
                    </div>
                    <div className="absolute rounded-xl shadow-xl bg-accent flex justify-center items-center w-3/6 p-3 -top-8 left-80">
                        <img className="aspect-auto rounded-xl shadow-xl" alt="home page demo display on register page" src={homeDisplayRegister}/>
                    </div>
                </div>
           </div>
           <img className="w-full absolute -z-10 rotate-6 scale-110 opacity-75" alt="home background art" src={homeBackground} />
        </div>
    );
}

export default Hero;