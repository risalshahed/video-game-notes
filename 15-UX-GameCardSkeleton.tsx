import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
// 15.6
const GameCardSkeleton = () => {
    // **** "GameCard" er Skeleton (ONURUP/ SIMILAR) kore kisu banassi
    return (
        <Card width='300px' borderRadius={10} overflow='hidden'>
            {/* "lecture_15" this Skeleton is like a placeholder for an image that is being loaded! well, shohoj banglay, jokhn page reload dbo r image load hoite thakbe, page/ images full load howar agey ekta JHAPSHA drishwo asbe amdr shamne, image er, shei scene ta e hoilo Skeleton */}
            <Skeleton height='250px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;