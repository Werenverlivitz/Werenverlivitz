s1=document.createElement("script")
s1.src="https://werenverlivitz.github.io/werenverlivitz/brain-controller-v2.js"
s1.head.appendChild(s1)

predict=(training,steps)=>{
    //Init the training network:
    net1=new brain.recurrent.RNNTimeStep()

    //Init the training data:
    training=[1,2,3]

    //Train the net:
    net1.train([training])

    //Get the prediction:
    return net1.forecast(training,steps)
}
