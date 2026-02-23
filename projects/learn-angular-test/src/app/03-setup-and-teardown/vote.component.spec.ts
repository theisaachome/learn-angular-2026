import { VoteComponent } from './vote.component';
import {TestBed} from '@angular/core/testing';

describe('VoteComponent', () => {

  let component: VoteComponent;
  beforeEach(()=>{
    component =new VoteComponent();
  })
  afterEach(()=>{

  })
  it('should increment totalVote when upVoted', () => {
    // Arrange
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrease totalVote when downVote', () => {
    // Arrange
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
