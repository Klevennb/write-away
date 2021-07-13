

const streakService = () => {
    const todos = []
  
    const add = (todo) => {
        todos.push(todo)
    }
}

const mapStateToProps = (state) => ({
  user: state.user,
  entry: state.entry,
});

export default connect(mapStateToProps)(StreakCounter);