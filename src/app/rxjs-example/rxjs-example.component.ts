import { Component } from '@angular/core';
import { Observable, interval, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent {
  res: unknown[] = [];
  isFromEventSub: boolean = false;

  reset() {
    this.res = [];
  }

  observable = new Observable(function subscribe(observer) {
    let id1: any, id2: any;
    const id = setTimeout(() => {
      observer.next("Hello Rxjs 1");
      // observer.complete();

      id1 = setTimeout(() => {
        observer.next("Hello Rxjs 2");
        id2 = setTimeout(() => {
          observer.complete();
        }, 1000);
      }, 1000);

    }, 1000);

    return function unsubscribe() {
      clearTimeout(id);
      clearTimeout(id1);
      clearTimeout(id2);
    };
  });

  startDemo() {
    this.reset();
    this.res.push('start');

    let subscription = this.observable.subscribe({
      next: (value) => {
        this.res.push(value);
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.res.push('Done');
        console.log("Done");
      },
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 10000);
  }

  startInterval() {
    this.reset();
    const observable = interval(1000);
    const subscription = observable.subscribe((x) => {
      console.log(x)
      this.res.push(x);
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  startChildSub() {
    this.reset();
    const foo = interval(500);
    const bar = interval(1000);

    const subscription = foo.subscribe((x) => {
      console.log("first: " + x);
      this.res.push("first: " + x);
    });
    const childSub = bar.subscribe((x) => {
      console.log("second: " + x);
      this.res.push("second: " + x);
    });

    subscription.add(childSub);

    setTimeout(() => {
      // Unsubscribes BOTH `subscription` and `childSub`
      subscription.unsubscribe();
    }, 5000);
  }

  observer = {
    next: (val: any) => {
      console.log(val);
      this.res.push(val);
    },
    error: (err: any) => {
      console.log(err);
      this.res.push(err);
    },
    complete: () => {
      console.log("complete");
      this.res.push('complete');
      this.res.push('===========================');
    },
  };

  ofSub() {
    this.reset();
    const observer = this.observer;
    of("hello").subscribe(observer);
    of([1, 2, 3]).subscribe(observer);
    of(1, 2, 3, "hello", "world", { foo: "bar" }, [4, 5, 6]).subscribe(observer);
  }

  fromSub() {
    this.reset();
    const observer = this.observer;
    from([1, 2, 3]).subscribe(observer);
    from("hello world").subscribe(observer);

    const map = new Map();
    map.set(1, "hello");
    map.set(2, "bye");

    // output: [1, 'hello'], [2, 'bye']
    // complete: 'complete'
    from(map).subscribe(observer);

    const set = new Set();
    set.add(1);
    set.add(2);

    // output: 1, 2
    // complete: 'complete'
    from(set).subscribe(observer);

    // output: 'hello world'
    // complete: 'complete'
    from(Promise.resolve("hello world")).subscribe(observer);
  }

  fromEventSub() {
    this.isFromEventSub = true;
    this.reset();
    const observer = this.observer;
    const btn: any = document.querySelector("#btn");
    const input: any = document.querySelector("#input");

    // output (example): MouseEvent {...}
    // complete: không có gì log.
    fromEvent(btn, "click").subscribe(observer);

    // output (example): KeyboardEvent {...}
    // complete: không có gì log.
    fromEvent(input, "keydown").subscribe(observer);
  }
}
