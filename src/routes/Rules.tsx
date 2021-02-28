import React from 'react'
import { Link } from 'react-router-dom'
import 'routes/Rules.scss'

const Rules = () =>
  <div className="Rules">
    <Link className="btn right" to="/play">Start!</Link>
    <h1>Codenames Pictures Online </h1>
    <p>
          The online version of Codenames Pictures by
      <a href="https://czechgames.com/en/codenames-pictures/" target="_blank" rel="noopener noreferrer">
            czechgames
      </a>
    </p>
    <h3>Intro</h3>
    <p>
          What are these strange symbols on the map? They code for locations where spies must contact secret agents!
      <br />
          Two rival spymasters know the agent in each location. They deliver coded messages telling their field
          operatives where to go for clandestine meetings. Operatives must be clever. A decoding mistake could lead to
          an unpleasant encounter with an enemy agent – or worse, with the assassin!
      <br />
          Both teams race to contact all their agents, but only one team can win.
    </p>
    <h2>Game rules</h2>
    <h3>The spymasters key card</h3>
    <p>
          Each game has one spy master key that shows who can be found in each location.
      <br />
          The spymasters should choose the key card randomly, don’t let the field operatives see the key.
      <br />
          The key corresponds to the grid. Blue squares correspond to pictures that Blue Team
      <br />
          must guess (locations with blue agents). Red squares correspond to pictures that Red Team must
      <br />
          guess (locations with red agents). Pale squares have innocent bystanders, and the black square
      <br />
          hides an assassin!
    </p>
    <h3>Starting team</h3>
    <p>
          The lights on the sides of the key card indicate which team starts. The starting team
      <br />
          has 8 pictures to guess. The other team has 7. The starting team will give the first
      <br />
          clue of the game.
    </p>
    <h3>Game play</h3>
    <p>
          Spymasters take turns giving one-word clues.
      <br />
          The word relates to one or more pictures on the grid. The field operatives try to guess which pictures their
          spymaster meant.
      <br />
          When a field operative touches a picture, the spymaster reveals who is in that location. If it is one of their
          team’s agents, the operatives may keep guessing locations related to that one-word clue. Otherwise, it is the
          other team’s turn. The first team to contact all their agents wins the game.
    </p>
    <h3>Taking turns</h3>
    <p>
      <strong>Teams take turns</strong>, beginning with the starting team. (The starting team is indicated by the
          lights on the sides of the key card.)
      <br />
          On your team’s turn, the spymaster gives <strong>one clue</strong>, and the field operatives may make
      <strong>multiple guesses</strong>.
    </p>
    <h3>Giving the clue</h3>
    <p>
          If you are the spymaster, your job is to think up a clue that relates to some of the pictures your team is
          trying to guess.
      <br />
          Your clue consists of <strong>one word</strong> that relates to those pictures <strong>and one number</strong>
          that tells how many of your pictures relate to that word.
    </p>
    <blockquote>
      <p>
            Example: A good clue for these two pictures might be
        <strong><em> flying: 2</em></strong>.
      </p>
    </blockquote>
    <p>
      <img
        src="/codenames-pictures/images/cards/card-29.jpg"
        width="150px"
        alt="card-example doughnut"
        style={{ display: 'inline-block' }}
      />
      <img
        src="/codenames-pictures/images/cards/card-4.jpg"
        width="150px"
        alt="card-example witch"
        style={{ display: 'inline-block', marginLeft: '1rem' }}
      />
    </p>
    <p>
          You are allowed to give a clue for only one
      <br />
          picture (<strong><em>doghnut: 1</em></strong>) but it’s fun to try for two or more.
      <br />
          Getting four pictures with one clue is a big accomplishment.
    </p>
    <h3>Making contact</h3>
    <p>
          When the spymaster gives a clue, his or her field operatives try to figure out what it means.
      <br />
          They can debate it amongst themselves, but the spymaster must keep a straight face and is not allowed to
          comment. The operatives indicate their official guess when one of them touches one of the pictures on
      <br />
          the table. (Online, verbal confirmation to the spymaster which card)
      <br />
          The spymaster reveals who is in that location by righ clicking on the tile and assigns one of the following
          states: &quot;Red&quot;, &quot;Blue&quot;, &quot;Neutral&quot;, &quot;Game over&quot;.
    </p>
    <ul>
      <li>
            If the field operative verbally chooses a picture belonging to his or her team, the spymaster marks the
            picture with the correct color. The operatives may continue making guesses (but they do not get another
            clue).
      </li>
      <li>
            If the field operative verbally chooses a location
        <br />
            with an innocent bystander, the spymaster marks it with an innocent (&quot;Neutral&quot;) state.
        <strong>This ends the turn</strong>.
      </li>
      <li>
            If the field operative chooses a picture belonging to the other team, the picture is marked by one of the
            other team’s agent colors.
        <br />
            This <strong>ends the turn</strong>. (And it helps the other team)
      </li>
      <li>
            If the field operative chooses the location
        <br />
            with the assassin, the picture is marked as assassinated (&quot;Game over&quot;).
        <strong>This ends the game!</strong>
        <br />
            The team that contacted the assassin loses.
      </li>
    </ul>
    <h3>Ending the Turn</h3>
    <p>
          Your team’s turn always has <strong>exactly one clue</strong> and <strong>one or more guesses</strong>. If the
          operatives’ first guess is one of their team’s pictures, they may make a second guess.
      <br />
          If that’s correct, they may make another guess, and so on.
    </p>
    <p><strong>The turn ends</strong></p>
    <ul>
      <li>
            if they guess a picture that’s not theirs,
      </li>
      <li>
            if they choose to not guess anymore,
      </li>
      <li>
            or if they have already made as many
      </li>
    </ul>
    <p>
          guesses as the number specified by the clue <strong>plus one more</strong>.<br />
          For example, if your spymaster says <strong><em>flying: 2</em></strong>,
          you can make as many as 3 correct guesses. This doesn’t make much sense on your first turn,
          but later in the game it can be very useful.
      <br />
          For example, you might have received several clues for which you did not get all the pictures. You can guess
          these pictures instead of or in addition to those related to the current clue.
      <br />
          The &quot;one more guess&quot; rule gives you a chance to catch up.
    </p>
    <h3>Ending the game</h3>
    <p>
      <strong>The game ends when one team has all their pictures covered.</strong>
      <br />
          That team wins. It is possible to win on the other team’s turn if
      <br />
          they guess your last picture.
      <br />
          The game can end early if a field operative touches the location with the assassin. That operative’s team
          loses.
    </p>
    <h2>Online actions</h2>
    <ul>
      <li>
        <strong>Zoom in:</strong> click on the tile
      </li>
      <li>
        <strong>Marking a state:</strong> right click on the tile
      </li>
      <li>
        <strong>Remove a marking:</strong> double click on the tile
      </li>
      <li>
        <strong>Choosing a spymasters key card:</strong> click on the <strong><em>spy master</em></strong> button
      </li>
      <li>
        <strong>Search for a spymaster key:</strong> click on the
        <strong><em>Click here</em></strong> link on the spymaster page, enter the card ID and submit.
      </li>
    </ul>
    <Link className="btn" to="/play">Start!</Link>
  </div>

export default Rules
