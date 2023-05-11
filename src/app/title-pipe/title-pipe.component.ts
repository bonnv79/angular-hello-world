import { Component, Pipe } from '@angular/core';
import { PipeTransform } from '../interfaces';

@Pipe({
  name: "appTitle",
})

export class TitlePipeComponent implements PipeTransform {
  transform(
    resourceId: string,
    addText: string = "Add",
    editText: string = "Edit"
  ): string {
    return resourceId ? editText : addText;
  }
}
