export const sendMessage = async(req,res) => {
    res.send(req.params.id);
}

export const getMessages = async(req,res) => {}