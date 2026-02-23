import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when updated', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(v => totalVotes = v);
    component.upVote();
    expect(totalVotes).toBe(1);
  });
});
