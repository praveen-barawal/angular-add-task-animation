import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const AngularAnimation = [
 

  trigger("slideInOut", [
    transition(":enter", [
      style({ transform: "translateY(100%)", opacity: 0 }),
      animate(
        "600ms ease-in",
        style({ transform: "translateY(0%)", opacity: 1 })
      )
    ]),
    transition(":leave", [
      style({ transform: "translateY(0%)", opacity: 1 }),
      animate("0ms ease-in", style({ transform: "translateY(0%)", opacity: 0 }))
    ])
  ]),

 
];
