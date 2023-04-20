const Comments = require("../models/Comments")

module.exports = {
    postComment: async (req, res) => {
        try {
            await Comments.create({
            comment:req.body.comment,
            likes: 0,
            commentId: req.params.id,
            userName: req.user.userName,
          });
          console.log("Comment has been added!");
          res.redirect(`/post/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
      },
    }
