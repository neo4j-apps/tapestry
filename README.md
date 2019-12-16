# Tapestry
A neo4j driver spike.

```Typescript
import {reduce} from 'rxjs/operators';

import {Driver, Dict, List, Monad, NodeMonad, RecordMonad} from '.';

type Header = Dict<Monad<any>>;
type Data = List<NodeMonad>;
type Rec = RecordMonad<Data, Header>;

const driver = new Driver<Data, Header, Rec>({});

driver.runQuery('MATCH (n) RETURN n')
    .pipe(reduce((agg, next) => agg.concat(next), List.of<Rec>([])))
    .subscribe((res) => {
        console.log('result', res);
    });
```

## Configuration
```Typescript
import {
    List,
    Monad,
    RecordMonad,
    Packer,
    Unpacker,
    DRIVER_HEADERS
} from '.';

export interface IAuth {
    scheme: 'basic',
    principal: string,
    credentials: string;
}

export interface IConnectionConfig<Data extends any = List<Monad<any>>> {
    secure?: true;
    auth: IAuth;
    host: string;
    port: number;
    userAgent: string;
    getResponseHeader?: (unpacked: Data) => DRIVER_HEADERS,
    getResponseData?: (unpacked: Data) => Data,
    packer?: Packer<Data>;
    unpacker?: Unpacker<Data>;
}

export interface IDriverConfig<Data = Monad<any>,
    Header = Data,
    Rec = RecordMonad<Data, Header>> {
    maxPoolSize: number;
    connectionConfig: IConnectionConfig<Data>;
    mapToRecordHeader: (headerRecord: Data) => Header;
    mapToRecord: (headerRecord: Header, data: Data) => Rec;
}
```
