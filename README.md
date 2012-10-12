# What is an infinite size button?

Well it's nothing actually. But there are some buttons with infinite width. How is that possible you ask? 
It's the [Fitt's Law](http://en.wikipedia.org/wiki/Fitts%27_law). And reading from Wikipedia about it there's the mention of the infinite width buttons:
> Edges and corners of the computer monitor (e.g., the location of the Start button and Taskbar in Microsoft Windows, and the menus and Dock of Mac OS X) are particularly easy to acquire with a mouse, touchpad or trackball because the pointer remains at the screen edge regardless of how much further the mouse is moved, thus can be considered as having infinite width.

This is hardly helpful for a web page since it never gets to the edges or the corners of the screen. However sometimes you may wish to make a certain touch/click target slightly bigger than it's graphical look shows it to be.

# Sample use

    $('#some-button-or-link').infinite_size({
      padding_top: 10,
      padding_bottom: 11,
      padding_left: 12,
      padding_right: 13 // all default to 20
    });

# Demo

Soon.