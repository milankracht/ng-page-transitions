# ng-page-transitions
Different page transitions on the same page, dependent on order of the page in AngularJS

Imagine the following situation: you have a series of pages visitors are browsing, let's say page1, page2, page3, etc. If you want implement logical page transitions for browsing, the type of transition should be dependent on how you browse. If you go from page 2 to page 3, the transition can be sliding from right to left. This is a more or less intuitive animation which indicates 'progression'. But if you go back, let's say from page 4 to page 3, the animation should be from left to right, to indicate you go back in history.

In most examples on the internet on page transitions in Angular, you will find a fixed page transition on every page, mostly defined in the controller of a given page. This means that the transition on entering the page will be indentical on every situation. In this case the page animation does not support the idea of progression when you browse through a series of pages or steps as described above.

I created this simple solution where a special function determines if someone is going forward or backward in a series of pages. And dependent on which direction he goes, the page transition animation is applied. The animations itself are pure CSS.

Off course you can make variations on this issue, but the main idea behind is setting a page transition on a mouse/click event.
