class Pong {
    constructor(maxScore) {
      this.maxScore = maxScore;
      this.player1Score = 0;
      this.player2Score = 0;
      this.i = 0;
    }
    
    play(ballPos, playerPos,i) {
      this.i++
      let player = 'Player 1'
      if(this.i%2===0){
        player = 'Player 2'
      }
      
      if(this.maxScore< this.player1Score||this.maxScore< this.player2Score){
        return 'Game Over!'
      }
    
      if(Math.abs(ballPos - playerPos)<=3.5){
        if(player === 'Player 1'){this.player1Score++}else{this.player2Score++};
        return player + ' has hit the ball!';
      }else{
    
        if(this.maxScore == this.player1Score||this.maxScore == this.player2Score){
          
       if(this.maxScore == this.player1Score){
         this.player1Score++
         return 'Player 1 has won the game!'}
        else if(this.maxScore == this.player2Score){
          this.player2Score++
          return 'Player 2 has won the game!'}
      }
        return player + ' has missed the ball!'
    }
  }